import Shop from "../models/shop.model";
import uploadOnCloudinary from "../utils/cloudinary";

export const createAndEditShop = async (req, res) => {
    try {
        const { name, city, state, address } = req.body
        let image;
        if (req.file) {
            image = await uploadOnCloudinary(req.file.path)
        }
        let shop = await Shop.findOne({ owner: req.file.path })
        if (!shop) {
            shop = await Shop.create({
                name, city, state, address, image, owner: userId
            })
        } else {
            shop = await Shop.findByIdAndUpdate(shop._id, {
                name, city, state, address, image, owner: userId
            }, { new: true })
        }
        await shop.populate("owner")
        return res.status(201).json(shop)
    } catch (error) {
        return res.status(500).json({ message: `create shop error ${error}` })
    }
}

