using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Talent.Common.Aws;
using Talent.Common.Contracts;

namespace Talent.Common.Services
{
    public class FileService : IFileService
    {
        private readonly IHostingEnvironment _environment;
        private readonly string _tempFolder;
        private IAwsService _awsService;

        public FileService(IHostingEnvironment environment, 
            IAwsService awsService)
        {
            _environment = environment;
            _tempFolder = "images\\";
            _awsService = awsService;
        }

        public async Task<string> GetFileURL(string id, FileType type)
        {
            string pathWeb = "";
            var path = "";
            pathWeb = _environment.WebRootPath;
            if (id != null && type == FileType.ProfilePhoto && pathWeb != "")
            {
                string pathValue = pathWeb + _tempFolder;
                path = pathValue + id;
            }
            Console.WriteLine("Inside fileservice GetFileURL path: " + path);
            return path;
        }

        public async Task<string> SaveFile(IFormFile file, FileType type)
        {
            var myUniqueFileName = "";
            string pathWeb = "";
            pathWeb = _environment.WebRootPath;
            Console.WriteLine("Inside fileservice : " + file.FileName);

            if (file != null && type == FileType.ProfilePhoto && pathWeb != "")
            {
                string pathValue = pathWeb + _tempFolder;
                myUniqueFileName = $@"{DateTime.Now.Ticks}_" + file.FileName;
                var path = pathValue + myUniqueFileName;
                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                Console.WriteLine("path inside save file"+path);
            }
            Console.WriteLine(myUniqueFileName);
            return myUniqueFileName;
        }
    

        public async Task<bool> DeleteFile(string id, FileType type)
        {
            //Your code here;
            return true;
        }


        #region Document Save Methods

        private async Task<string> SaveFileGeneral(IFormFile file, string bucket, string folder, bool isPublic)
        {
            //Your code here;
            throw new NotImplementedException();
        }
        
        private async Task<bool> DeleteFileGeneral(string id, string bucket)
        {
            //Your code here;
            throw new NotImplementedException();
        }
        #endregion
    }
}
