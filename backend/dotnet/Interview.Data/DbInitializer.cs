using System;
using System.Linq;
using Interview.Entities;
using Microsoft.EntityFrameworkCore;

namespace Interview.Data
{
  public static class DbInitializer
  {
    public static void Initialize(InterviewDbContext context)
    {
      context.Database.Migrate();
      SeedData(context);
    }

    private static void SeedData(InterviewDbContext context)
    {
      const bool keepData = true;

      if (context.Assets.Any() && keepData)
      {
        return;
      };

      Random rnd = new Random();
      int seedInt = rnd.Next(10, 1000); 

      var assetResults = Asset.GetSeedData(seedInt).ToList();

      context.Assets.AddRange(assetResults);
      context.SaveChanges();

      foreach (var asset in assetResults)
      {
        context.AssetFields.AttachRange(asset.Fields);
        context.SaveChanges();
      }
      
    }
  }
}