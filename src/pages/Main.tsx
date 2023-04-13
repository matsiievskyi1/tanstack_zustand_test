import {
  List,
  Box,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Folder from "@mui/icons-material/Folder";
import { IRoutes } from "../global/routes";

export const Main = ({ pageRoutes }: { pageRoutes: IRoutes }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {Object.entries(pageRoutes).map((item) => {
          const { title, path, desc } = item[1];
          return (
            <ListItem key={item[0]}>
              <Link
                role='navigation'
                to={path}
                style={{ color: "#263238", display: "flex", textDecoration: "none" }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={title}
                  secondary={
                    <Typography
                      sx={{ display: "inline" }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      {desc}
                    </Typography>
                  }
                ></ListItemText>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
