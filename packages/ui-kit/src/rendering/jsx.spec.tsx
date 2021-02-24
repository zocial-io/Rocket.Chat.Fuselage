/** @jsx jsx */
/** @jsxFrag jsxFrag */

import { Option } from '../blocks/Option';
import { jsx, jsxFrag } from './jsx';

describe('divider', () => {
  it('renders', () => {
    const input = (
      <>
        <divider />
      </>
    );

    const output = [
      {
        type: 'divider',
      },
    ];

    expect(input).toStrictEqual(output);
  });
});

describe('section', () => {
  it('renders text as plain_text', () => {
    const input = (
      <>
        <section
          text={<plain_text text='This is a plain text section block.' emoji />}
        />
      </>
    );

    const output = [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'This is a plain text section block.',
          emoji: true,
        },
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('render text as mrkdwn', () => {
    const input = (
      <>
        <section
          text={
            <mrkdwn text='This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>' />
          }
        />
      </>
    );

    const output = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
        },
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders text fields', () => {
    const input = (
      <>
        <section
          fields={
            <>
              <plain_text text='*this is plain_text text*' emoji />
              <plain_text text='*this is plain_text text*' emoji />
              <plain_text text='*this is plain_text text*' emoji />
              <plain_text text='*this is plain_text text*' emoji />
              <plain_text text='*this is plain_text text*' emoji />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'section',
        fields: [
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders accessory as button', () => {
    const input = (
      <>
        <section
          text={<mrkdwn text='This is a section block with a button.' />}
          accessory={
            <button
              actionId='click_me'
              text={<plain_text text='Click Me' emoji />}
              value='click_me_123'
            />
          }
        />
      </>
    );

    const output = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a section block with a button.',
        },
        accessory: {
          type: 'button',
          actionId: 'click_me',
          text: {
            type: 'plain_text',
            text: 'Click Me',
            emoji: true,
          },
          value: 'click_me_123',
        },
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders accessory as image', () => {
    const input = (
      <>
        <section
          text={
            <mrkdwn text='This is a section block with an accessory image.' />
          }
          accessory={
            <image
              imageUrl='https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg'
              altText='cute cat'
            />
          }
        />
      </>
    );

    const output = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a section block with an accessory image.',
        },
        accessory: {
          type: 'image',
          imageUrl:
            'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
          altText: 'cute cat',
        },
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders accessory as overflow menu', () => {
    const input = (
      <>
        <section
          text={
            <mrkdwn text='This is a section block with an overflow menu.' />
          }
          accessory={
            <overflow
              actionId='overflow-menu'
              options={[
                {
                  text: {
                    type: 'plain_text',
                    text: '*this is plain_text text*',
                    emoji: true,
                  },
                  value: 'value-0',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: '*this is plain_text text*',
                    emoji: true,
                  },
                  value: 'value-1',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: '*this is plain_text text*',
                    emoji: true,
                  },
                  value: 'value-2',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: '*this is plain_text text*',
                    emoji: true,
                  },
                  value: 'value-3',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: '*this is plain_text text*',
                    emoji: true,
                  },
                  value: 'value-4',
                },
              ]}
            />
          }
        />
      </>
    );

    const output = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a section block with an overflow menu.',
        },
        accessory: {
          type: 'overflow',
          actionId: 'overflow-menu',
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-2',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-3',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-4',
            },
          ],
        },
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders accessory as datepicker', () => {
    const input = (
      <>
        <section
          text={<mrkdwn text='Pick a date for the deadline.' />}
          accessory={
            <datepicker
              actionId='date'
              initialDate='1990-04-28'
              placeholder={<plain_text text='Select a date' emoji />}
            />
          }
        />
      </>
    );

    const output = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Pick a date for the deadline.',
        },
        accessory: {
          type: 'datepicker',
          actionId: 'date',
          initialDate: '1990-04-28',
          placeholder: {
            type: 'plain_text',
            text: 'Select a date',
            emoji: true,
          },
        },
      },
    ];

    expect(input).toStrictEqual(output);
  });
});

describe('image', () => {
  it('renders with title', () => {
    const input = (
      <>
        <image
          {...({ title: <plain_text text='I Need a Marg' emoji /> } as any)}
          imageUrl='https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg'
          altText='marg'
        />
      </>
    );

    const output = [
      {
        type: 'image',
        title: {
          type: 'plain_text',
          text: 'I Need a Marg',
          emoji: true,
        },
        imageUrl:
          'https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg',
        altText: 'marg',
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders with no title', () => {
    const input = (
      <>
        <image
          imageUrl='https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1'
          altText='inspiration'
        />
      </>
    );

    const output = [
      {
        type: 'image',
        imageUrl:
          'https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1',
        altText: 'inspiration',
      },
    ];

    expect(input).toStrictEqual(output);
  });
});

describe('actions', () => {
  it('renders all selects', () => {
    const input = [
      {
        type: 'actions',
        elements: [
          <conversations_select
            actionId='conversations'
            placeholder={<plain_text text='Select a conversation' emoji />}
          />,
          <channels_select
            actionId='channels'
            placeholder={<plain_text text='Select a channel' emoji />}
          />,
          <users_select
            actionId='users'
            placeholder={<plain_text text='Select a user' emoji />}
          />,
          <static_select
            actionId='static'
            placeholder={<plain_text text='Select an item' emoji />}
            options={
              ([
                {
                  text: <plain_text text='*this is plain_text text*' emoji />,
                  value: 'value-0',
                },
                {
                  text: <plain_text text='*this is plain_text text*' emoji />,
                  value: 'value-1',
                },
                {
                  text: <plain_text text='*this is plain_text text*' emoji />,
                  value: 'value-2',
                },
              ] as unknown) as Option[]
            }
          />,
        ],
      },
    ];

    const output = [
      {
        type: 'actions',
        elements: [
          {
            type: 'conversations_select',
            actionId: 'conversations',
            placeholder: {
              type: 'plain_text',
              text: 'Select a conversation',
              emoji: true,
            },
          },
          {
            type: 'channels_select',
            actionId: 'channels',
            placeholder: {
              type: 'plain_text',
              text: 'Select a channel',
              emoji: true,
            },
          },
          {
            type: 'users_select',
            actionId: 'users',
            placeholder: {
              type: 'plain_text',
              text: 'Select a user',
              emoji: true,
            },
          },
          {
            type: 'static_select',
            actionId: 'static',
            placeholder: {
              type: 'plain_text',
              text: 'Select an item',
              emoji: true,
            },
            options: [
              {
                text: {
                  type: 'plain_text',
                  text: '*this is plain_text text*',
                  emoji: true,
                },
                value: 'value-0',
              },
              {
                text: {
                  type: 'plain_text',
                  text: '*this is plain_text text*',
                  emoji: true,
                },
                value: 'value-1',
              },
              {
                text: {
                  type: 'plain_text',
                  text: '*this is plain_text text*',
                  emoji: true,
                },
                value: 'value-2',
              },
            ],
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders filtered conversations select', () => {
    const input = (
      <>
        <actions
          elements={
            <>
              <conversations_select
                actionId='conversations'
                placeholder={
                  <plain_text text='Select private conversation' emoji />
                }
                filter={{
                  include: ['private'],
                }}
              />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'actions',
        elements: [
          {
            type: 'conversations_select',
            actionId: 'conversations',
            placeholder: {
              type: 'plain_text',
              text: 'Select private conversation',
              emoji: true,
            },
            filter: {
              include: ['private'],
            },
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders selects with initial options', () => {
    const input = (
      <>
        <actions
          elements={
            <>
              <conversations_select
                actionId='conversations'
                placeholder={<plain_text text='Select a conversation' emoji />}
                initialConversation='D123'
              />
              <users_select
                actionId='users'
                placeholder={<plain_text text='Select a user' emoji />}
                initialUser='U123'
              />
              <channels_select
                actionId='channels'
                placeholder={<plain_text text='Select a channel' emoji />}
                initialChannel='C123'
              />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'actions',
        elements: [
          {
            type: 'conversations_select',
            actionId: 'conversations',
            placeholder: {
              type: 'plain_text',
              text: 'Select a conversation',
              emoji: true,
            },
            initialConversation: 'D123',
          },
          {
            type: 'users_select',
            actionId: 'users',
            placeholder: {
              type: 'plain_text',
              text: 'Select a user',
              emoji: true,
            },
            initialUser: 'U123',
          },
          {
            type: 'channels_select',
            actionId: 'channels',
            placeholder: {
              type: 'plain_text',
              text: 'Select a channel',
              emoji: true,
            },
            initialChannel: 'C123',
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders button', () => {
    const input = (
      <>
        <actions
          elements={
            <>
              <button
                actionId='click_me'
                text={<plain_text text='Click Me' emoji />}
                value='click_me_123'
              />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            actionId: 'click_me',
            text: {
              type: 'plain_text',
              text: 'Click Me',
              emoji: true,
            },
            value: 'click_me_123',
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders datepicker', () => {
    const input = (
      <>
        <actions
          elements={
            <>
              <datepicker
                actionId='start'
                initialDate='1990-04-28'
                placeholder={<plain_text text='Select a date' emoji />}
              />
              <datepicker
                actionId='end'
                initialDate='1990-04-28'
                placeholder={<plain_text text='Select a date' emoji />}
              />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'actions',
        elements: [
          {
            type: 'datepicker',
            actionId: 'start',
            initialDate: '1990-04-28',
            placeholder: {
              type: 'plain_text',
              text: 'Select a date',
              emoji: true,
            },
          },
          {
            type: 'datepicker',
            actionId: 'end',
            initialDate: '1990-04-28',
            placeholder: {
              type: 'plain_text',
              text: 'Select a date',
              emoji: true,
            },
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });
});

describe('context', () => {
  it('renders plain text', () => {
    const input = (
      <>
        <context
          elements={
            <>
              <plain_text text='Author: K A Applegate' emoji />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: 'Author: K A Applegate',
            emoji: true,
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders mrkdwn', () => {
    const input = (
      <>
        <context
          elements={
            <>
              <image
                imageUrl='https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg'
                altText='cute cat'
              />
              <mrkdwn text='*Cat* has approved this message.' />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'context',
        elements: [
          {
            type: 'image',
            imageUrl:
              'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            altText: 'cute cat',
          },
          {
            type: 'mrkdwn',
            text: '*Cat* has approved this message.',
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });

  it('renders text and images', () => {
    const input = (
      <>
        <context
          elements={
            <>
              <mrkdwn text='*This* is :smile: markdown' />
              <image
                imageUrl='https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg'
                altText='cute cat'
              />
              <image
                imageUrl='https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg'
                altText='cute cat'
              />
              <image
                imageUrl='https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg'
                altText='cute cat'
              />
              <plain_text text='Author: K A Applegate' emoji />
            </>
          }
        />
      </>
    );

    const output = [
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: '*This* is :smile: markdown',
          },
          {
            type: 'image',
            imageUrl:
              'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            altText: 'cute cat',
          },
          {
            type: 'image',
            imageUrl:
              'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            altText: 'cute cat',
          },
          {
            type: 'image',
            imageUrl:
              'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            altText: 'cute cat',
          },
          {
            type: 'plain_text',
            text: 'Author: K A Applegate',
            emoji: true,
          },
        ],
      },
    ];

    expect(input).toStrictEqual(output);
  });
});

// describe('input', () => {
//   it('renders multiline plain text input', () => {
//     const input = [
//       {
//         type: 'input',
//         element: {
//           type: 'plain_text_input',
//           multiline: true,
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     const output = [
//       {
//         type: 'input',
//         element: {
//           type: 'plain_text_input',
//           multiline: true,
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     expect(input).toStrictEqual(output);
//   });

//   it('renders plain text input', () => {
//     const input = [
//       {
//         type: 'input',
//         element: {
//           type: 'plain_text_input',
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     const output = [
//       {
//         type: 'input',
//         element: {
//           type: 'plain_text_input',
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     expect(input).toStrictEqual(output);
//   });

//   it('renders multi users select', () => {
//     const input = [
//       {
//         type: 'input',
//         element: {
//           type: 'multi_users_select',
//           placeholder: {
//             type: 'plain_text',
//             text: 'Select users',
//             emoji: true,
//           },
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     const output = [
//       {
//         type: 'input',
//         element: {
//           type: 'multi_users_select',
//           placeholder: {
//             type: 'plain_text',
//             text: 'Select users',
//             emoji: true,
//           },
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     expect(input).toStrictEqual(output);
//   });

//   it('renders static select', () => {
//     const input = [
//       {
//         type: 'input',
//         element: {
//           type: 'static_select',
//           placeholder: {
//             type: 'plain_text',
//             text: 'Select an item',
//             emoji: true,
//           },
//           options: [
//             {
//               text: {
//                 type: 'plain_text',
//                 text: '*this is plain_text text*',
//                 emoji: true,
//               },
//               value: 'value-0',
//             },
//             {
//               text: {
//                 type: 'plain_text',
//                 text: '*this is plain_text text*',
//                 emoji: true,
//               },
//               value: 'value-1',
//             },
//             {
//               text: {
//                 type: 'plain_text',
//                 text: '*this is plain_text text*',
//                 emoji: true,
//               },
//               value: 'value-2',
//             },
//           ],
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     const output = [
//       {
//         type: 'input',
//         element: {
//           type: 'static_select',
//           placeholder: {
//             type: 'plain_text',
//             text: 'Select an item',
//             emoji: true,
//           },
//           options: [
//             {
//               text: {
//                 type: 'plain_text',
//                 text: '*this is plain_text text*',
//                 emoji: true,
//               },
//               value: 'value-0',
//             },
//             {
//               text: {
//                 type: 'plain_text',
//                 text: '*this is plain_text text*',
//                 emoji: true,
//               },
//               value: 'value-1',
//             },
//             {
//               text: {
//                 type: 'plain_text',
//                 text: '*this is plain_text text*',
//                 emoji: true,
//               },
//               value: 'value-2',
//             },
//           ],
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     expect(input).toStrictEqual(output);
//   });

//   it('renders datepicker', () => {
//     const input = [
//       {
//         type: 'input',
//         element: {
//           type: 'datepicker',
//           initialDate: '1990-04-28',
//           placeholder: {
//             type: 'plain_text',
//             text: 'Select a date',
//             emoji: true,
//           },
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     const output = [
//       {
//         type: 'input',
//         element: {
//           type: 'datepicker',
//           initialDate: '1990-04-28',
//           placeholder: {
//             type: 'plain_text',
//             text: 'Select a date',
//             emoji: true,
//           },
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     expect(input).toStrictEqual(output);
//   });

//   it('renders linear scale', () => {
//     const input = [
//       {
//         type: 'input',
//         element: {
//           type: 'linear_scale',
//           maxValue: 2,
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     const output = [
//       {
//         type: 'input',
//         element: {
//           type: 'linear_scale',
//           maxValue: 2,
//         },
//         label: {
//           type: 'plain_text',
//           text: 'Label',
//           emoji: true,
//         },
//       },
//     ];
//     expect(input).toStrictEqual(output);
//   });
// });

// describe('conditional', () => {
//   it('renders when conditions match', () => {
//     const blocks = [
//       {
//         type: 'conditional',
//         when: {
//           engine: ['rocket.chat'],
//         },
//         render: [
//           {
//             type: 'section',
//             text: {
//               type: 'plain_text',
//               text: 'This is a plain text section block.',
//               emoji: true,
//             },
//           },
//         ],
//       },
//     ];

//     expect(conditionalParse(blocks)).toStrictEqual([
//       {
//         component: 'section',
//         props: {
//           key: 0,
//           children: [
//             {
//               component: 'text',
//               props: {
//                 key: 0,
//                 children: 'This is a plain text section block.',
//                 emoji: true,
//                 block: false,
//               },
//             },
//           ],
//           block: true,
//         },
//       },
//     ]);
//   });

//   it('renders when no conditions are set', () => {
//     const blocks = [
//       {
//         type: 'conditional',
//         when: {
//           engine: ['rocket.chat'],
//         },
//         render: [
//           {
//             type: 'section',
//             text: {
//               type: 'plain_text',
//               text: 'This is a plain text section block.',
//               emoji: true,
//             },
//           },
//         ],
//       },
//     ];

//     expect(parse(blocks)).toStrictEqual([
//       {
//         component: 'section',
//         props: {
//           key: 0,
//           children: [
//             {
//               component: 'text',
//               props: {
//                 key: 0,
//                 children: 'This is a plain text section block.',
//                 emoji: true,
//                 block: false,
//               },
//             },
//           ],
//           block: true,
//         },
//       },
//     ]);
//   });

//   it('does not render when conditions match', () => {
//     const blocks = [
//       {
//         type: 'conditional',
//         when: {
//           engine: ['livechat'],
//         },
//         render: [
//           {
//             type: 'section',
//             text: {
//               type: 'plain_text',
//               text: 'This is a plain text section block.',
//               emoji: true,
//             },
//           },
//         ],
//       },
//     ];

//     expect(conditionalParse(blocks)).toStrictEqual([]);
//   });
// });
