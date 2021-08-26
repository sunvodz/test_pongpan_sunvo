stringDecoder("WUBWEWUBAREWUBWUBTHEWUBBACKYARDWUBMYWUBFRIENDWUB");

function stringDecoder(song) {
  let remove_song = song.replace(/WUBWUB/g, " ").replace(/WUB/g, " ").trim();
  console.log(remove_song);
}
