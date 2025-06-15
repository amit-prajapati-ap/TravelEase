import { Pack } from "../models/Pack.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { deleteImageByUrl, uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllPack = async (req, res) => {
  try {
    const { sortBy, sortOrder } = req.query;

    const finalSortBy = sortBy && sortBy.trim() !== '' ? sortBy : 'createdAt';
    const finalSortOrder = sortOrder && sortOrder.trim() !== '' ? sortOrder : 'desc';

    // Build sort object
    const sort = {};
    sort[finalSortBy] = finalSortOrder === 'asc' ? 1 : -1;

    const packs = await Pack.find().sort(sort);

    res.status(200).json(new ApiResponse(200, { length: packs.length, packs }, "All Packages Fetched Successfully"))
  } catch (error) {
    res.status(500).json(new ApiError(500, "Server error occured while fetching all Packages", error))
  }
}

const getPack = async (req, res) => {
  try {
    const { id } = req.params;

    const pack = await Pack.findById(id);

    if (!pack) {
      return res.status(404).json(new ApiError(404, "Package not found"))
    }

    res.status(200).json(new ApiResponse(200, pack, "Package Fetched Successfully"))
  } catch (error) {
    res.status(500).json(new ApiError(500, "Server error occured while fetching Package", error))
  }
}

const newPack = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const existingPack = await Pack.findOne({ title });

    if (existingPack) {
      return res.status(400).json(new ApiError(400, "Package already exists"));
    }

    let thumbnailBuffer = null;
    if (req.files?.thumbnail?.[0]?.buffer) {
      thumbnailBuffer = req.files.thumbnail[0].buffer;
    }

    if (!thumbnailBuffer) {
      return res.status(400).json(new ApiError(400, `Thumbnail not attached`));
    }

    const packThumbnail = await uploadOnCloudinary(thumbnailBuffer);

    if (!packThumbnail) {
      return res.status(400).json(new ApiError(400, `Error while uploading course thumbnail`))
    }

    const packThumbnailUrl = packThumbnail.url

    const pack = await Pack.create({
      title,
      thumbnail:packThumbnailUrl,
      user: req.userId
    });

    res.status(200).json(new ApiResponse(200, pack, "Package Created Successfully"));
  } catch (error) {
    res.status(500).json(new ApiError(500, "Server error occured while creating the new Package", error))
  }
}

const updatePack = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Remove undefined values
    Object.keys(updates).forEach(key => {
      if (updates[key] === undefined) {
        delete updates[key];
      }
    });

    const pack = await Pack.findOneAndUpdate(
      { _id: id, user: req.userId },
      updates,
      { new: true, runValidators: true }
    );

    if (!pack) {
      return res.status(404).json(new ApiError(404, "Package not found"));
    }

    res.status(200).json(new ApiResponse(200, pack, "Package Updated Successfully"));
  } catch (error) {
    res.status(500).json(new ApiError(500, "Server error occured while updating the Package", error))
  }
}

const deletePack = async (req, res) => {
  try {
    const { id } = req.params;

    const pack = await Pack.findOneAndDelete({ _id: id, user: req.userId });
    
    if (!pack) {
      return res.status(404).json(new ApiError(404, "Package not found"));
    }

    await deleteImageByUrl(pack.thumbnail)

    res.status(200).json(new ApiResponse(200, true, "Package Deleted Successfully"));
  } catch (error) {
    res.status(500).json(new ApiError(500, "Server error occured while deleting the Package", error))
  }
}

export { getAllPack, getPack, newPack, updatePack, deletePack };