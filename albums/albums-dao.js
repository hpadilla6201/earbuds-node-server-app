import albumsModel from "./album-model.js"

export const findAllAlbums = async () => {
    const albums = await albumsModel.find()
    return albums
}
export const createAlbum = async (album) => {
    const actualInsertedAlbum = await albumsModel.create(album)
    return actualInsertedAlbum
}
export const deleteAlbum = async (aid) => {
    const status = await albumsModel.deleteOne({_id: aid})
    return status
}

export const updateAlbum = (aid, album) => albumsModel.updateOne({_id: aid}, {$set: album})
