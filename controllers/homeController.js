
export default class HomeController {  
    
    homeView(req, res) {
        res.render('home/sobre', { layout: 'layout' });
    }

}