﻿namespace CourseMicroSerivce.Domain.TeacherPortal
{
    public class SchoolQuiz
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string Type { get; set; }
        public ICollection<QuizPosts> QuizPosts { get; set; }
    }
}
