using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LogClientSide.Services;
using LogClientSide.Models;

namespace LogClientSide.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private IProductRepository _productRepository;
        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        // GET: api/values
        [HttpGet("{skip:int?}/{take:int?}")]
        public PaginationViewModel<ProductViewModel> Get(int skip = 0, int take = 10)
        {
            var query = _productRepository.GetAllAsync()
               .Skip(skip)
               .Take(take)
               .OrderBy(x => x.ProductId);
            return new PaginationViewModel<ProductViewModel>(_productRepository.GetAllAsync(), query);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ProductViewModel Get(int id)
        {
            return _productRepository.GetAllAsync().FirstOrDefault(x => x.ProductId == id);
        }

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
