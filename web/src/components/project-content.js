import React from "react";
import { Box } from "rebass";





const ProjectContent = ({ photos }) => {
  return (
    <Box my={4}>
      {/* <Grid>
        {photos.length ? (
          photos.map((photo, index) => {
            const withFixedAspectRatio = {
              ...photo.asset.fluid,
              aspectRatio: 8 / 5
            };
            return (
              <AspectRatioBox key={index} ratio={8 / 5}>
                <Img fluid={withFixedAspectRatio} />
              </AspectRatioBox>
            );
          })
        ) : (
          <>
            <AspectRatioBox ratio={8 / 5} />
            <AspectRatioBox ratio={8 / 5} />
            <AspectRatioBox ratio={8 / 5} />
            <AspectRatioBox ratio={8 / 5} />
          </>
        )}
      </Grid> */}
    </Box>
  );
};

export default ProjectContent;