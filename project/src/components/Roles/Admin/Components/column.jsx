
export const COLUMNS = [
  {
    Header:'ID',
    accessor:'id'
  },
  {
    Header:'First_name',
    accessor:"first_name"
  },
  {
    Header:'Last_name',
    accessor:'last_name'
  },
  {
    Header:'Email',
    accessor:'email'
  },
  {
    Header:'Mobile',
    accessor:'mobile'
  },
  {
    Header:'Active',
    accessor:'is_active'

  },
  {
    Header:'Verified',
    accessor:'is_verified'

  },{
    Header:"Date Joined",
    accessor:'date_joined'

  },
 {
    Header: 'Actions',
    accessor: 'actions',
 }
 
]

export const GROUPED_COLUMNS = [
    {
        Header:'ID',
        accessor:'id'

    },
      
    {

        Header :'Name',
        columns:[
            {
                Header:'First_name',
                accessor:"first_name"
              },
              {
                Header:'Last_name',
                accessor:'last_name'
              },
        ]

    },
    {
        Header:'Info',
        columns:[
            {
                Header:'Email',
                accessor:'email'
              },
              {
                Header:'Mobile',
                accessor:'mobile'
              },
              {
                Header:"Date Joined",
                accessor:'date_joined'
            
              }
        ]

    },
    {
        Header:'Status',
        columns:[
            {
                Header:'Active',
                accessor:'is_active'
            
              },
              {
                Header:'Verified',
                accessor:'is_verified'
            
              },
        ]
    }
]