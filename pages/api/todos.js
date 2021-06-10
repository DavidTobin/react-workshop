export default (req, res) => {
  res.status(200).json({
    todos: [
      { name: 'Run React workshop', done: false },
      { name: 'On-call', done: true },
    ]
  })
}
