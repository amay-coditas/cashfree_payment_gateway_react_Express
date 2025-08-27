import React, { useEffect, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

const ICON_NAMES = [
  'CandleChartIcon',
  'LineChartIcon',
  'CloseIcon',
  'ErrorIcon',
  'WarningIcon',
  'SuccessIcon',
];

const Icons: React.FC = () => {
  const [iconList, setIconList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const iconListTemp: string[] = [];
      for (let index = 0; index < ICON_NAMES.length; index++) {
        const name = ICON_NAMES[index];
        iconListTemp.push((await import(`./${name}`)).default);
      }
      setIconList(iconListTemp);
    })();
  }, []);

  return (
    <>
      {['transparent', '#ccc'].map((backgroundColor) => (
        <div
          style={{
            display: 'grid',
            gap: '20px 30px',
            gridTemplateColumns: 'repeat( auto-fit, minmax(150px, 1fr) )',
            padding: '50px 10px',
            backgroundColor,
          }}
          key={`${backgroundColor}`}
        >
          {iconList.map((Icon, index) => (
            <div key={`icons-${index}`} style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed darkgray',
                  minWidth: '64px',
                  minHeight: '64px',
                  padding: '10px',
                  marginBottom: '10px',
                }}
              >
                <Icon />
              </div>

              <p>{ICON_NAMES[index]}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default {
  title: 'icons/List',
  component: Icons,
  argTypes: {},
} as Meta<typeof Icons>;

const Template: StoryFn<typeof Icons> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {};
