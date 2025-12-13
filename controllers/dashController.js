

export default class DashController {
    dashboardView(req, res) {
        res.render('dashboard/dashPage', { layout: false });
    }
}