using LogClientSide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogClientSide.Services
{
    public interface IProductRepository
    {
        IQueryable<ProductViewModel> GetAllAsync();       
    }

    public class ProductRepository : IProductRepository
    {
        private List<ProductViewModel> _products = new List<ProductViewModel>();

        public ProductRepository()
        {
            //Carico i dati staticamente
            var random = new Random();
            for (int i = 0; i < 100; i++)
            {
                var product = new ProductViewModel()
                {
                    ProductId = i,
                    Available = i % 3 == 0,
                    Description = $"Prodotto {i}",
                    Name = $"PRD{i}",
                    Price = Math.Round(random.NextDouble() * 100, 2)
                };

                _products.Add(product);
            }
        }

        public IQueryable<ProductViewModel> GetAllAsync()
        {
            return _products.AsQueryable();
        }
    }
}
