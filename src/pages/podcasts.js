import React from "react";
import Podcast from "../components/podcast";
import Episodes from "../components/episodes";
import Grid from "@material-ui/core/Grid";
import PodcastCampaigns from "../components/podcast-campaigns";
import Inbox from "../components/inbox";

export default function Podcasts() {
  return (
    <Grid container>
      <Grid item>
        <Podcast />
      </Grid>
      <Grid item>
          <Episodes />
          <PodcastCampaigns />
      </Grid>
      <Grid item>
          <Inbox />
      </Grid>
    </Grid>
  );
}
