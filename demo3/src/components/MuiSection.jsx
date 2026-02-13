import { Paper, Typography, Chip, Stack } from "@mui/material";

function MuiSection({ page }) {
  return (
    <Paper elevation={5} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="600">
        Material UI Section
      </Typography>

      {page === "home" && (
        <Typography mt={1}>
          Modern homepage UI built using Material UI components.
        </Typography>
      )}

      {page === "about" && (
        <Typography mt={1}>
          Passionate about building scalable web applications using React.
        </Typography>
      )}

      {page === "degree" && (
        <>
          <Typography mt={1}>
            B.Tech in Computer Science Engineering
          </Typography>
          <Typography color="text.secondary">
            Specialization: AI & ML
          </Typography>
          <Chip label="Undergraduate" color="primary" sx={{ mt: 1 }} />
        </>
      )}

      {page === "skills" && (
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          <Chip label="HTML" />
          <Chip label="CSS" />
          <Chip label="JavaScript" />
          <Chip label="React" />
          <Chip label="Material UI" />
          <Chip label="Bootstrap" />
        </Stack>
      )}

      {page === "contact" && (
        <>
          <Typography mt={1}>Email: student@cuchd.in</Typography>
          <Typography>Phone: +91 XXXXXXXX</Typography>
        </>
      )}
    </Paper>
  );
}

export default MuiSection;
