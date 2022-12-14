import HomeBannerLeft from "@/components/HomeComp/HomeBannerLeft/HomeBannerLeft";
import HomeBannerRight from "@/components/HomeComp/HomeBannerRight/HomeBannerRight";
import HomeProjects from "@/components/HomeComp/HomeProjects/HomeProjects";
import HomeSkills from "@/components/HomeComp/HomeSkills/HomeSkills";
import PageHeader from "@/components/PageHeader/PageHeader";
import AddReview from "@/components/ReviewComp/AddReview";
import ReviewSlider from "@/components/Slider/ReviewSlider";
import { useStateContext } from "@/context/ContextProvider";
import styles from "@/styles/HomePage.module.css";
import { Container, Grid } from "@mui/material";
import { fakeData } from "../../test-data/sliderData";

const HomePage = () => {
  const { currentColor, darkTheme } = useStateContext();

  // css conditionalMode for dark mode
  const conditionalMode = darkTheme ? styles.dark : styles.light;

  return (
    <div className={`${styles.home_page} ${conditionalMode}`}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <HomeBannerLeft />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeBannerRight />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HomeSkills />
          </Grid>
        </Grid>

        <hr className={styles.break_line} />
        <PageHeader title="Demo Projects" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HomeProjects />
          </Grid>
        </Grid>

        <hr className={styles.break_line} />
        <PageHeader title="Testimonial" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ReviewSlider data={fakeData} />
          </Grid>
          <Grid item xs={12}>
            <AddReview />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
