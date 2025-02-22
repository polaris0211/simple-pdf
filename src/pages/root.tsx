import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { Link } from "react-router";
type SvgIconComponent = OverridableComponent<SvgIconTypeMap> & {
  muiName: string;
};
interface Action {
  name: string;
  desciprtion: string;
  icon: SvgIconComponent;
  //action: unknown;
}

export default function Root() {
  const actions: Action[] = [
    {
      name: "Double Slide Printing",
      desciprtion: "Make 2 PDF for double side printing",
      icon: PrintIcon,
    },
    {
      name: "Split PDF",
      desciprtion: "Make 1 PDF to 2 by spliting",
      icon: ContentCutIcon,
    },
  ];
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        textAlign="center"
        mt={5}
        my={2.5}
        fontWeight={900}
        color="primary"
      >
        Simple PDF
      </Typography>
      <Grid container spacing={2.5} pb={5} px={5}>
        {actions.map((action, index) => (
          <Grid size={6} key={index}>
            <Card variant="outlined" sx={{ padding: 7.5 }}>
              <CardContent>
                <Grid container spacing={5} size={30}>
                  <Grid size={4}>
                    <Typography
                      fontSize="1.8rem"
                      component="span"
                      fontWeight="bold"
                    >
                      {action.name}
                    </Typography>
                    <Typography color="textSecondary">
                      {action.desciprtion}
                    </Typography>
                  </Grid>
                  <Grid size={6}>
                    <action.icon sx={{ fontSize: "5em" }} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link to="/test" viewTransition>
        Test
      </Link>
    </>
  );
}
