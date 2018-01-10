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
        [InlineData(1000)]
        public void AssetSeedTest_ValidSeedNumberProvide_ShouldReturnListSeeds(int seedQuant)
        {
            // Arrange & Act
            var result = Asset.GetSeedData(seedQuant);

            // Assert
            var assetResultList = result.ToList();
            Assert.True(assetResultList.Count() == seedQuant);
            Assert.True(assetResultList.FirstOrDefault()?.Fields.Any());
        }

        [Theory]
        [InlineData(9)]
        [InlineData(1001)]
        [InlineData(-1)]
        public void AssetSeedTest_InvalidSeedNumberProvide_ShouldThrowInvalidException(int seedQuant)
        {
            // Arrange & Act
            var exception = Record.Exception(() => Asset.GetSeedData(seedQuant));

            // Assert
            Assert.True(exception?.GetType() == typeof(ArgumentOutOfRangeException));
        }
    }
}
