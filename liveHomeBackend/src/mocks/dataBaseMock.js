function status () {
  function create (status) {
    return status
  }

  return {
    create
  }
}

function dataBaseMock () {
  return {
    status
  }
}

module.exports = dataBaseMock
