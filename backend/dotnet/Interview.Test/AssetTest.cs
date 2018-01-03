using System;
using System.Linq;
using Interview.Entities;
using Xunit;

namespace Interview.Test
{
    public class AssetTest
    {
        [Fact]
        public void AssetSeedTest_ValidSeedNumberProvide_ShouldReturnListSeeds()
        {

            var result = Asset.GetSeedData(999);

            Assert.True(result.Any());


        }
    }
}
