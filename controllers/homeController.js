
export default class HomeController {  
    
    homeView(req, res) {
        res.render('home/homePage', { layout: 'layout' });
    }
}