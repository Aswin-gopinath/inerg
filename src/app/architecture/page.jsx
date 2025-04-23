import React from "react";

const Architecture = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Project Architecture</h1>

      <div className="space-y-4">
        <Section title="1. Project Structure">
          <CodeBlock>
{`src/
├── app/
│   └── page.js
│   └── layout.js
│   └── global.css
│
├──redux
│   ├── store.js
│   ├── covidSlice.jsx
│   
├── components/
│   ├── Map.jsx
│   ├── Chart.jsx
│   ├── LineChart.jsx
│   └── StateWiseFilter.jsx
│
├── data/
│   └── data.json
`}
          </CodeBlock>
        </Section>

        <Section title="2. Architecture Flow">
          <ul className="list-disc pl-6 space-y-1">
            <li>User selects a state using <strong>StateSelector</strong>.</li>
            <li>This dispatches an action to <strong>Redux Slice</strong> via <code>setSelectedState</code>.</li>
            <li><strong>MapComponent</strong> updates view based on selected state.</li>
            <li><strong>PieChart</strong> and <strong>LineChart</strong> re-render using filtered data.</li>
            <li>Global state is maintained via <code>Redux Toolkit</code>.</li>
          </ul>
        </Section>

        <Section title="3. Technologies Used">
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>React JS</strong> – UI components</li>
            <li><strong>Redux Toolkit</strong> – Global state management</li>
            <li><strong>React Leaflet</strong> – Interactive maps</li>
            <li><strong>Plotly.js</strong> – Pie and line charts</li>
            <li><strong>Vercel</strong> – Deployment</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </section>
);

const CodeBlock = ({ children }) => (
  <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-auto">
    <code>{children}</code>
  </pre>
);

export default Architecture;
