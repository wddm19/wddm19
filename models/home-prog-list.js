const prgList =
{

    fakeDB: [], //property

    init() {

        this.fakeDB.push({
            prgType: 'Arts', 
            prgLink: `#`, 
            iconURL: `https://3ja7kv3vb64k3jba19afwdp1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/animation_pen.svg`
        });

        this.fakeDB.push({
            prgType: 'Visual Designs', 
            prgLink: `#`, 
            iconURL: `https://3ja7kv3vb64k3jba19afwdp1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/photography_digital-imaging.svg`
        });

        this.fakeDB.push({
            prgType: '3D Animation', 
            prgLink: `#`, 
            iconURL: `https://3ja7kv3vb64k3jba19afwdp1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/gameart-cube.svg`
        });

        this.fakeDB.push({
            prgType: 'Media Production', 
            prgLink: `#`, 
            iconURL: `https://3ja7kv3vb64k3jba19afwdp1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/photography_cinematography.svg`
        });

        this.fakeDB.push({
            prgType: 'Web and Interactive', 
            prgLink: `#`, 
            iconURL: `https://3ja7kv3vb64k3jba19afwdp1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/interiordesign_cad.svg`
        });

        this.fakeDB.push({
            prgType: 'Journalism', 
            prgLink: `#`, 
            iconURL: `https://3ja7kv3vb64k3jba19afwdp1-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/graphicdesign_document.svg`
        });

    },
    getallPrgList() {  // method // return the array
        return this.fakeDB;
    }

}

prgList.init();
module.exports=prgList;