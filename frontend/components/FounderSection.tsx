"use client";

export default function FounderSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Meet Our <span className="text-accent">Team</span>
        </h2>
        <div className="rounded-lg border border-border bg-background p-8">
          <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
            <span className="text-foreground/30">Photo</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Gautam</h3>
          <p className="text-foreground/70 mb-4">Founder & Lead Developer</p>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Passionate about building reliable, scalable digital products that solve real business problems.
          </p>
        </div>
      </div>
    </section>
  );
}
