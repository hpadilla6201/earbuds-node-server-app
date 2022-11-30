import * as albumDao from './albums-dao'

export const getAlbums = () => albums;


const albumsController = (app) => {

    const createAlbum =  async (req, res) => {
        const album = req.body;
        const actualAlbum = await albumDao.createAlbum(album);
        res.send(actualAlbum);
    }

    const findAllAlbums = async (req, res) => {
      const albumsInDatabase = await albumDao.findAllAlbums();
      res.send(albumsInDatabase);
    }
    
    const updateAlbum = async (req, res) => {
        const albumIdToUpdate = req.params.aid;
        const albumUpdates = req.body;
        const status = await albumDao.updateAlbum(albumIdToUpdate, albumUpdates);
        res.send(status);
    }

    const deleteAlbum = async (req, res) => {
        const aid = req.params['aid'];
        const status = await albumDao.deleteAlbum(aid);
        res.send(status);
    }
    
    
    app.get('/albums', findAllAlbums);
    app.post('/albums', createAlbum);
    app.delete('/albums/:aid', deleteAlbum);
    app.put('/albums/:aid', updateAlbum);
}

export default albumsController;

