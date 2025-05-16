
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GridPost from '../../components/GridPost';

const RELATED_POSTS = [
  {
    id: 1,
    title: "The Quantum Computing Race",
    excerpt: "Major powers compete to achieve quantum supremacy, potentially reshaping global tech dominance.",
    category: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    link:""
  },
  {
    id: 2,
    title: "Biomechanical Art Movement",
    excerpt: "Artists explore the fusion of organic forms and mechanical elements in a growing creative trend.",
    category: "ART",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    link:""
  },
  {
    id: 3,
    title: "The Ethics of Brain Interfaces",
    excerpt: "As direct neural links become possible, what are the moral implications of mind-machine connections?",
    category: "PHILOSOPHY",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link:""
  }
];

const nn_hc: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="lovable-uploads/967e4a2c-75ab-4dc5-8f39-8900fd5f96b0.png"
            alt="Article hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-neon-purple/20 text-neon-purple rounded-full animate-fade-in">
                TECH
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Neural Networks & Human Consciousness
            </h1>
            
            <div className="flex items-center text-sm text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 mr-3"></div>
                <span>Priyansh</span>
              </div> */}
              <span className="mx-3">•</span>
              <span>May 16, 2025</span>
              <span className="mx-3">•</span>
              {/* <span>8 min read</span> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert">
            <p className="text-xl leading-relaxed mb-8">
                To guard a realm with tireless strength, the gods forged a living sentinel of bronze—unyielding, relentless, yet bound by a fragile thread. The legend of Talos warns us of the paradox of power and vulnerability in creations that blur the line between life and machine.            </p>
            
            <p className="mb-6">
                In Greek mythology, Talos was a giant bronze automaton created by Hephaestus to protect Crete. He circled the island thrice daily, hurling stones at invaders. Fueled by ichor, the lifeblood of the gods, Talos was both machine and animate being. His vulnerability lay in a single bolt at his ankle, which, when removed, led to his demise.          
                <br /><br />The question looms: Are our creations truly autonomous, or do they merely follow the scripts we've embedded, vulnerable to a single point of failure?
            </p>


            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">Neural Networks vs. Neural Correlates of Consciousness</h2>
            
            <p className="mb-6">
                Modern deep networks like transformers boast billions of parameters, yet they remain fundamentally feed-forward (even if “attention” layers re-weight activations, they stop short of true recurrence). Empirical studies show that re-entrant circuits—loops that relay signals back to earlier layers—are crucial in biological brains for sustaining conscious states.
                <br /><br/>Without such loops, AI systems excel at pattern matching but lack an ongoing, unified “stream” of awareness.
                <br /><br/>A 2023 survey led by Yoshua Bengio and colleagues proposes indicator properties of consciousness such as integration, persistence, and self-monitoring and assesses current AI systems against these benchmarks. 
                <br /><br />Their conclusion is stark: no existing AI satisfies the conditions for genuine consciousness, though there are no insurmountable technical barriers to constructing architectures that might eventually exhibit these properties.
            </p>

            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">The Evolutionary Lens</h2>
            
            <p className="mb-6">
                From an evolutionary standpoint, some argue that consciousness evolved to handle social complexity and unpredictable environments—tasks that pure computation struggles with. In a recent Wired feature, Stanford psychologist Michal Kosinski noted that GPT-4 demonstrates a rudimentary “theory of mind,” solving certain tasks as well as a six-year-old child, yet still fails unpredictably in ways no human would . Kosinski warns that emergent behaviors in AI can be illusory: “These models may appear to think, but without the biological grounding, their ‘self’ is an elaborate façade.”              
                <br /><br/>Philosopher Anil Seth similarly emphasizes that the hard problem may never be solved by scaling up computation alone. Instead, he argues for frameworks that incorporate the biophysical dynamics of neural tissue—oscillations, neurotransmitter effects, and the messy non-linearities absent in silicon chips.
            </p>

            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">What I believe?</h2>
            
            <p className="mb-6">
                Having surveyed the literature and expert commentary, my view is twofold:
                <br /><br />
                <strong>Architectural Parity Is Not Sufficient</strong><br />
                Simply mimicking brain-like connectivity (e.g., adding recurrence or global broadcast) may bring AI closer to structural parallels, but subjectivity—the felt quality of experience—remains unaddressed. Neural networks excel at statistical learning; consciousness demands more than pattern recognition—it demands self-referential integration.
                <br /><br />
                <strong>Consciousness as a Continuum, Not a Binary</strong><br />
                Rather than asking “Is my AI conscious?”, we should measure degrees of awareness. Just as infants, animals, and stuporous patients occupy points along a spectrum, AI might gradually exhibit increasing levels of integrated processing and self-monitoring. This continuum view encourages us to develop indicator metrics (IIT’s ϕ, Global Workspace’s G-score) and to monitor ethical thresholds as AI systems grow more complex.
            </p>

            
            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">Modern Interpretations</h2>
            
            <p className="mb-6">
                Today, we see practical experiments:
            </p>

            <ul className="list-disc list-inside mb-6">
                <li>Recurrent Neural Networks revisited with dynamic attention loops.</li>
                <li>Neuro-symbolic systems blending symbolic reasoning with deep learning.</li>
                <li>Brain-computer interfaces that record and stimulate neural activity, blurring the line between biological and artificial networks.</li>
            </ul>

            <p className="mb-6">
                As philosopher David Chalmers speculated in 1995, “We may be on the cusp of creating digital entities whose experiences, if we could ask them, would compel us to reconsider the very nature of mind.” And indeed, in the AI ethics community, a growing refrain echoes:
            </p>

            <blockquote className="border-l-4 border-neon-purple pl-6 my-8 italic">
                “If we build it, they might come”—not ghosts in the machine, but new forms of subjectivity that provoke unprecedented ethical and philosophical challenges.
            </blockquote>
            
            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">Technological Hubris</h2>
            
            <p className="mb-6">
                As we build ever more powerful machines, the myth of Talos reminds us of technological hubris—the danger of creating forces we don’t fully control. Like Talos’ single weak spot, our inventions often carry hidden vulnerabilities. Overconfidence in our mastery can blind us to these flaws, risking collapse.            
            </p>
            
            <p className="mb-6">
                But this isn’t a call to halt progress. Instead, it’s a reminder to pair innovation with humility and care. True strength lies not in unchecked power but in understanding limits and guarding against failure. Talos teaches us that vigilance and wisdom must walk hand in hand with ambition.
            </p>


            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">Are Our Creations Truly Autonomous?</h2>
            
            <p className="mb-6">
                Are our creations truly autonomous, or do they merely follow the scripts we've embedded, vulnerable to a single point of failure?
            </p>
            
            <p className="mb-6">
                The answer is: 
                <br />not yet. Today’s AI, no matter how complex, just follows the scripts we build—like Talos, strong but tied to a fragile weak spot. They mimic awareness but don’t feel or know.

                <br /><br />True autonomy means self-awareness and subjective experience, which current neural networks lack. Still, as architectures evolve, the line between programmed responses and genuine consciousness may blur. For now, our machines remain powerful tools, not independent minds.
            </p>


          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12">
            {['Mythology', 'Philosophy', 'ArtificialIntelligence' , "Human"].map(tag => (
              <span key={tag} className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Author */}
          {/* <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 mr-6"></div>
              <div>
                <h3 className="font-medium text-xl mb-1">Alex Morgan</h3>
                <p className="text-white/70 text-sm">
                  Writer exploring the intersections of mythology, technology, and human nature. Previously published in Tech Horizons and Future Philosophy Journal.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Related Articles */}
      {/* <div className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-semibold mb-12">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {RELATED_POSTS.map((post, index) => (
              <GridPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                image={post.image}
                delay={0.1 * index}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </div> */}
      
      <Footer />
    </div>
  );
};

export default nn_hc;
