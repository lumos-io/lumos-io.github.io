import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const benefits = [
  { title: "💸 Cost Savings", desc: "Automatically reduce unused capacity." },
  { title: "⚡ Easy Setup", desc: "Deploy our lightweight agent in minutes." },
  { title: "🔒 Full Control", desc: "Insights without losing flexibility." },
];

function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">Why KubeScale?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{b.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
