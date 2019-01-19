module.exports = `
  id              int NOT NULL,
  name            varchar(100) NOT NULL,
  address         varchar(100),
  phone           varchar(100),
  status          varchar(15),
  date            timestamp default current_timestamp
`;
