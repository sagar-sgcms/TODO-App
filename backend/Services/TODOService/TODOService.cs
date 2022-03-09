using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Services.TODOService
{
    public class TODOService : ITODOService
    {
        private static List<TODOModel> data = new List<TODOModel>{
            new TODOModel{Id=1,TaskName="Task 1",CreatedOn=System.DateTime.Now,IsCompleted=false},
            new TODOModel{Id=2,TaskName="Task 2",CreatedOn=System.DateTime.Now,IsCompleted=false},
            new TODOModel{Id=3,TaskName="Task 3",CreatedOn=System.DateTime.Now,IsCompleted=false},
            new TODOModel{Id=4,TaskName="Task 4",CreatedOn=System.DateTime.Now,IsCompleted=false},
            new TODOModel{Id=5,TaskName="Task 5",CreatedOn=System.DateTime.Now,IsCompleted=false}
        };
        public async Task<ServiceResponse<TODOModel>> AddTask(TODOModel newTask)
        {
            newTask.Id = data.Count +1;
            data.Add(newTask);
            var result = new ServiceResponse<TODOModel>();
            result.Data = newTask;
            return result;
        }

        public async Task<ServiceResponse<List<TODOModel>>> GetAllTask()
        {
            var result = new ServiceResponse<List<TODOModel>>();
            result.Data = data;
            return result;
        }

        public async Task<ServiceResponse<TODOModel>> UpdateTask(TODOModel Task)
        {
            var index = data.FindIndex(x=>x.Id == Task.Id);
            data[index] = Task;
            var result = new ServiceResponse<TODOModel>();
            result.Data = Task;
            return result;
        }
    }
}