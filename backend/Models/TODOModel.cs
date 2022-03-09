using System;

namespace backend.Models
{
    public class TODOModel
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public bool IsCompleted { get; set; } = false;
        public DateTime CreatedOn { get; set; }
        public DateTime CompletedOn { get; set; }
    }
}