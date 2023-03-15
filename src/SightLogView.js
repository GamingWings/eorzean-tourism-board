import React from 'react';
import { WEATHER_MAPPING, EMOTE_MAPPING } from './Constants';
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
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CheckCircle, CheckCircleOutlineOutlined } from '@mui/icons-material';
import { styled } from '@mui/system';

const Test = styled('div')({
  'grid-template-columns': 'repeat(auto-fit, minmax(90px, 1fr))',
  'gap': '1rem',
  display: 'grid',
  width: '100%'
});

const ChipWrapper = styled('section')({
  'display': 'grid',
  'gap': '.5rem'
})

function SightLogView({
  Key,
  Name,
  ZoneName,
  Coordinates,
  Weather,
  Emote,
  Comment,
  URL,
  IsFound,
  onChangeMarkAsFound,
  CollectableWindowStartTime,
  CollectableWindowEndTime,
  WindowStartDisplay,
  WindowEndDisplay,
  AlertMessage,
}) {
  return (
    <Card>
      <CardHeader
        title={
          <Link href={URL} underline="hover">
            {Key}. {Name}
          </Link>
        }
        subheader={`${ZoneName} (${Coordinates.X}, ${Coordinates.Y})`}
      />
      <CardContent>
        <Grid container spacing={1}>
          {AlertMessage != null && (
            <Grid xs={12}>
              <Alert severity="error">{AlertMessage}</Alert>
            </Grid>
          )}
          <Test>
            {/* <Grid xs={4} spacing={0}> */}
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
            {/* </Grid>
            <Grid xs={4}  spacing={0}> */}
              <Chip label={`${WindowStartDisplay} - ${WindowEndDisplay}`}size="small" />
            {/* </Grid>
            <Grid xs={4} container> */}
            <ChipWrapper >
              {Weather.map((condition) => (
                  <Chip
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
            {/* </Grid> */}
          </Test>
          <Grid xs={12}>
            {CollectableWindowStartTime == null ||
            CollectableWindowEndTime == null ? (
              <Typography variant="h4">N/A</Typography>
            ) : (
              <Typography variant="h6">
                Available: {CollectableWindowStartTime.toLocaleTimeString()} -{' '}
                {CollectableWindowEndTime.toLocaleTimeString()}
              </Typography>
            )}
          </Grid>
          {/* <Grid xs={12}>
            <Typography paragraph>{Comment}</Typography>
          </Grid> */}
          <Grid xs={10} />
          <Grid>
            <Checkbox
              icon={<CheckCircleOutlineOutlined />}
              checkedIcon={<CheckCircle />}
              checked={IsFound}
              onChange={({ target: { checked } }) =>
                onChangeMarkAsFound({ Key, IsFound: checked })
              }
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SightLogView;
