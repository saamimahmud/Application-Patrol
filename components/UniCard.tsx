interface UniCardProps {
    name: string;
    country: string;
    deadline: string;
    status: string;
  }
  
  export default function UniCard({ name, country, deadline, status }: UniCardProps) {
    return (
      <div className="bg-brand-white border border-brand-light p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-brand-dark">{name}</h3>
            <p className="text-brand-deep text-sm">{country}</p>
          </div>
          <span className="bg-brand-light text-brand-deep text-xs font-bold px-3 py-1 rounded-full uppercase">
            {status}
          </span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-brand-light">
          <p className="text-xs text-brand-deep uppercase font-semibold">Next Deadline</p>
          <p className="text-brand-dark font-medium">{deadline}</p>
        </div>
      </div>
    );
  }