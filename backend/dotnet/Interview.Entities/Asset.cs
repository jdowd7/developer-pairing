using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Interview.Entities.Interfaces;

namespace Interview.Entities
{
  public class Asset : IEntityBase, IEntitySystemAttrs
  {
    public Asset()
    {
      DateCreatedUTC = DateTime.UtcNow;
      Fields = new HashSet<AssetFields>();
    }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int? Id { get; set; }
    public string Name { get; set; }

    public DateTime DateCreatedUTC { get; set; }
    public Guid CreatedBy { get; set; }
    public DateTime DateModifiedUTC { get; set; }
    public Guid ModifiedBy { get; set; }
    public bool IsDeleted { get; set; }
    public ICollection<AssetFields> Fields { get; set; }

    public static IEnumerable<Asset> GetSeedData(int assetNumber)  //int assetNumber)
    {
            if (assetNumber < 10 || assetNumber > 1000) throw new ArgumentOutOfRangeException($"Invalid Asset Quantity: {assetNumber}. Enter quantity between 10-1000.");

            // Setting fixed length to lower memory
            var seedList = new List<Asset>(assetNumber);

            for (int i = 0; i < assetNumber; i++)
            {
                seedList.Add(CreateAsset());
            }

            // Conserve Memory
            return seedList.ToArray();

    }

      private static Asset CreateAsset()
      {
          var guid = Guid.NewGuid();
          var numFields = guid.ToByteArray();
          var bitConverter = BitConverter.ToInt64(numFields, 0) % 1000;

          var addAsset = new Asset();
          addAsset.Fields = new List<AssetFields>();
          addAsset.Name = $"test{bitConverter}";
          addAsset.CreatedBy = guid;
          addAsset.ModifiedBy = guid;


          for (int i = 0; i < bitConverter; i++)
          {
              addAsset.Fields.Add(new AssetFields
                  {
                      Name = $"test asset field_{i+1}",
                      StringVal = $"string val_{i+1}"
              });
          }

          return addAsset;

      }

  }
}