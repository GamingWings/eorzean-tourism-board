import React from 'react';
import { WEATHER_MAPPING, EMOTE_MAPPING, DAY_MILLISECONDS } from './Constants';
import {
  Alert,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Link,
  Typography,
  Dialog,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CheckCircle, CheckCircleOutlineOutlined } from '@mui/icons-material';
import { styled } from '@mui/system';

const SiteLogContent = styled('section')({
  gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
  gap: '1rem',
  display: 'grid',
  width: '100%',
});

const ChipWrapper = styled('section')({
  display: 'grid',
  gap: '.5rem',
  height: '60px',
});

const ViewDetailsButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid xs={12}>
      <div>
        <Button variant="text" onClick={handleClickOpen}>
          View Details
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <Box p={2}>
            <SightLogView {...props} showMoreInfo />
          </Box>
        </Dialog>
      </div>
    </Grid>
  );
};

const SiteLogViewWrapper = (props) => {
  return (
    <SightLogView {...props} interactable={<ViewDetailsButton {...props} />} />
  );
};

const DefaultTimeFormat = {
  hour: 'numeric',
  minute: 'numeric',
};

const DefaultDateFormat = {
  day: 'numeric',
  year: 'numeric',
  month: 'numeric',
};

const DateDisplay = ({
  CollectableWindowStartTime,
  CollectableWindowEndTime,
  currentTime,
}) => {
  const isGreaterTwentyFourHours =
    new Date(CollectableWindowStartTime).getTime() >
    currentTime + DAY_MILLISECONDS;

  const startTimeFormat = isGreaterTwentyFourHours
    ? { ...DefaultTimeFormat, ...DefaultDateFormat }
    : DefaultTimeFormat;
  const startTime = CollectableWindowStartTime
    ? CollectableWindowStartTime.toLocaleTimeString(
        [],
        startTimeFormat
      ).replace(',', '')
    : '';

  return (
    <Grid xs={12} sx={{ marginTop: '10px' }}>
      {CollectableWindowStartTime == null ||
      CollectableWindowEndTime == null ? (
        <Typography variant="h4">N/A</Typography>
      ) : (
        <Typography variant="h6">
          {startTime}
          {!isGreaterTwentyFourHours &&
            ` - ${CollectableWindowEndTime.toLocaleTimeString(
              [],
              DefaultTimeFormat
            )}`}
        </Typography>
      )}
    </Grid>
  );
};

function SightLogView({
  Key,
  Name,
  ZoneName,
  Coordinates,
  Weather,
  Emote,
  URL,
  IsFound,
  onChangeMarkAsFound,
  CollectableWindowStartTime,
  CollectableWindowEndTime,
  WindowStartDisplay,
  WindowEndDisplay,
  AlertMessage,
  currentTime,
  interactable = <></>,
  Comment = null,
  showMoreInfo = false,
}) {
  return (
    <Card>
      <CardHeader
        title={
          <Link href={URL} underline="hover">
            {Key}. {Name}
          </Link>
        }
        subheader={`${ZoneName} (${Object.values(Coordinates).join(', ')})`}
      />
      <CardContent>
        <Grid
          container
          spacing={1}
          sx={{
            height: showMoreInfo ? 'auto' : '220px',
            textAlign: 'center',
            gap: '0.5rem',
          }}
        >
          {AlertMessage != null && (
            <Grid xs={12}>
              <Alert severity="error">{AlertMessage}</Alert>
            </Grid>
          )}
          <SiteLogContent>
            <Chip
              size="small"
              avatar={
                <Avatar
                  alt={Emote}
                  src={`${process.env.PUBLIC_URL}/emotes/${EMOTE_MAPPING[Emote]}`}
                />
              }
              label={Emote}
            />
            <Chip
              label={`${WindowStartDisplay} - ${WindowEndDisplay}`}
              size="small"
            />
            <ChipWrapper>
              {Weather.map((condition) => (
                <Chip
                  key={condition}
                  size="small"
                  avatar={
                    <Avatar
                      alt={condition}
                      src={`${process.env.PUBLIC_URL}/weather/${WEATHER_MAPPING[condition]}`}
                    />
                  }
                  label={condition}
                />
              ))}
            </ChipWrapper>
          </SiteLogContent>
          <DateDisplay
            CollectableWindowStartTime={CollectableWindowStartTime}
            CollectableWindowEndTime={CollectableWindowEndTime}
            currentTime={currentTime}
          />
          {showMoreInfo && (
            <Grid xs={12}>
              <Typography>{Comment}</Typography>
            </Grid>
          )}
          {interactable}
          <Grid xs={12}>
            <FormGroup sx={{ textAlignItems: 'end' }}>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Checkbox
                    icon={<CheckCircleOutlineOutlined />}
                    checkedIcon={<CheckCircle />}
                    checked={IsFound}
                    onChange={({ target: { checked } }) =>
                      onChangeMarkAsFound({ Key, IsFound: checked })
                    }
                  />
                }
                label="Collected"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SiteLogViewWrapper;
