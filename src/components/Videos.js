import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {
    console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' gap={2} justifyContent='start'>
      {videos.map((item,id) => (
        <Box key={id}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos