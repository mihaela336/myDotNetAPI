using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Vehicle
{
    public class UpdateVehicleRequestDto
    {
        public int UserDataId {get; set;}
        public DateTime AddedOn { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage = "Producer must be under 50 characters")]
        public string Producer { get; set; } = string.Empty;
        [Required]
        [MaxLength(50, ErrorMessage = "Model must be under 50 characters")]
        public string Model { get; set; } = string.Empty;
    }
}