using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogClientSide.Models
{
    public class PaginationViewModel<T>
    {
        public PaginationViewModel(IQueryable<T> data, IQueryable<T> filteredData)
        {
            Data = filteredData;
            TotalItems = data.Count();
        }
        
        public int TotalItems { get; }
        public IQueryable<T> Data { get; }
    }
}
