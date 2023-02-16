using Microsoft.AspNetCore.Mvc;

namespace KainatTarar.Challange.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
