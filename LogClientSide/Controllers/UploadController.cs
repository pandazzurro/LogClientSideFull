using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.IO;

namespace LogClientSide.Controllers
{
    [Route("api/[controller]")]
    public class UploadController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> UploadAsync(CancellationToken cancellationToken)
        {
            if (!Request.HasFormContentType)
                return BadRequest();

            var form = Request.Form;
            List<byte> fileResult = new List<byte>();
            foreach (var formFile in form.Files)
            {
                using (var readStream = formFile.OpenReadStream())
                {
                    using (var ms = new MemoryStream())
                    {
                        readStream.CopyTo(ms);
                        fileResult.AddRange(ms.ToArray());
                    }
                }
            }
            var filename = Request.Headers.FirstOrDefault(x => x.Key == "Content-Disposition");
            string path = Path.Combine(Path.GetTempPath(), filename.Value);
            System.IO.File.WriteAllBytes(path, fileResult.ToArray());

            return Ok();
        }
    }
}
