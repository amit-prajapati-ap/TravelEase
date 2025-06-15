import { Dest } from "../models/Dest.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { deleteImageByUrl, uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllDest = async (req, res) => {
    try {
        const { sortBy, sortOrder } = req.query;

        const finalSortBy = sortBy && sortBy.trim() !== '' ? sortBy : 'createdAt';
        const finalSortOrder = sortOrder && sortOrder.trim() !== '' ? sortOrder : 'desc';

        // Build sort object
        const sort = {};
        sort[finalSortBy] = finalSortOrder === 'asc' ? 1 : -1;

        const dests = await Dest.find().sort(sort);

        res.status(200).json(new ApiResponse(200, { length: dests.length, dests }, "All destinations Fetched Successfully"))
    } catch (error) {
        res.status(500).json(new ApiError(500, "Server error occured while fetching all destinations", error))
    }
}

const getDest = async (req, res) => {
    try {
        const { id } = req.params;

        const dest = await Dest.findById(id);

        if (!dest) {
            return res.status(404).json(new ApiError(404, "Destination not found"))
        }

        res.status(200).json(new ApiResponse(200, dest, "Destination Fetched Successfully"))
    } catch (error) {
        res.status(500).json(new ApiError(500, "Server error occured while fetching Destination", error))
    }
}

const newDest = async (req, res) => {
    try {
        const { title, price } = req.body;

        if (!title || !price) {
            return res.status(400).json(new ApiError(400, "All fields are required"));
        }

        const existingDest = await Dest.findOne({ title });

        if (existingDest) {
            return res.status(400).json(new ApiError(400, "Destination already exists"));
        }

        let thumbnailBuffer = null;
        if (req.files?.thumbnail?.[0]?.buffer) {
            thumbnailBuffer = req.files.thumbnail[0].buffer;
        }

        if (!thumbnailBuffer) {
            return res.status(400).json(new ApiError(400, `Thumbnail not attached`));
        }

        
        const destThumbnail = await uploadOnCloudinary(thumbnailBuffer);

        if (!destThumbnail) {
            return res.status(400).json(new ApiError(400, `Error while uploading course thumbnail`))
        }

        const destThumbnailUrl = destThumbnail.url

        const dest = await Dest.create({
            title,
            price,
            thumbnail:destThumbnailUrl,
            user: req.userId
        });

        res.status(200).json(new ApiResponse(200, dest, "Destination Created Successfully"));
    } catch (error) {
        res.status(500).json(new ApiError(500, "Server error occured while creating the new destination", error))
    }
}

const updateDest = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Remove undefined values
        Object.keys(updates).forEach(key => {
            if (updates[key] === undefined) {
                delete updates[key];
            }
        });

        const dest = await Dest.findOneAndUpdate(
            { _id: id, user: req.userId },
            updates,
            { new: true, runValidators: true }
        );

        if (!dest) {
            return res.status(404).json(new ApiError(404, "Destination not found"));
        }

        res.status(200).json(new ApiResponse(200, dest, "Destination Updated Successfully"));
    } catch (error) {
        res.status(500).json(new ApiError(500, "Server error occured while updating the Destination", error))
    }
}

const deleteDest = async (req, res) => {
    try {
        const { id } = req.params;

        const dest = await Dest.findOneAndDelete({ _id: id, user: req.userId });

        if (!dest) {
            return res.status(404).json(new ApiError(404, "Destination not found"));
        }

        await deleteImageByUrl(dest.thumbnail)

        res.status(200).json(new ApiResponse(200, true, "Destination Deleted Successfully"));
    } catch (error) {
        res.status(500).json(new ApiError(500, "Server error occured while deleting the Destination", error))
    }
}

export { getAllDest, getDest, newDest, updateDest, deleteDest };