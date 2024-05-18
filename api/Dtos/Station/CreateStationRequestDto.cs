using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Station
{
    public class CreateStationRequestDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Name must be 5 characters")]
        [MaxLength(50, ErrorMessage = "Name must be under 50 characters")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MinLength(10, ErrorMessage = "Adress must be at least 10 characters")]
        [MaxLength(50, ErrorMessage = "adress must be under 150 characters")]
        public string Adress { get; set; } = string.Empty;
    }
}