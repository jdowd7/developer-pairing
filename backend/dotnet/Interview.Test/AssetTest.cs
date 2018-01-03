using System;
using System.Linq;
using Interview.Entities;
using Xunit;

namespace Interview.Test
{
    public class AssetTest
    {
        [Theory]
        [InlineData(10)]
        [InlineData(500)]
        [InlineData(999)]
        public void AssetSeedTest_ValidSeedNumberProvide_ShouldReturnListSeeds(int seedQuant)
        {
            // Arrange & Act
            var result = Asset.GetSeedData(seedQuant);

            // Assert
            Assert.True(result.Count() == seedQuant);
        }
    }
}
