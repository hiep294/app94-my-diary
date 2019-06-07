let SS = () => {
  console.log(SS.value)
}
SS.value = 2

SS.change = () => {
  SS.value = SS.value + 2
}

export default SS