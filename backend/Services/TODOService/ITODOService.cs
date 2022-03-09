using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Services.TODOService
{
    public interface ITODOService
    {
        Task<ServiceResponse<List<TODOModel>>> GetAllTask();
        Task<ServiceResponse<TODOModel>> AddTask(TODOModel newTask);
        Task<ServiceResponse<TODOModel>> UpdateTask(TODOModel Task);
    }
}