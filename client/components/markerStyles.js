const markerStyles = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: 5,
  height: 5,
  left: -5 / 2,
  top: -5 / 2,

  border: '1px solid black',
  borderRadius: 10,
  backgroundColor: 'red',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export {markerStyles};