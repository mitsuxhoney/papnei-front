import { Building2, ChevronRight, FileText, UserCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const otherProducts = [
  {
    id: 'identity',
    name: 'Business Registration',
    icon: <Building2 className="w-5 h-5" />,
    description: 'Verify company registration status and details',
  },
  {
    id: 'aadhar',
    name: 'Aadhar E-sign',
    icon: <FileText className="w-5 h-5" />,
    description: 'Validate GST registration and filing status',
  },
]

const OurOtherProducts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 text-center mb-10">
        <Badge variant="outline">How it works ?</Badge>
        <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Seamless API Integration
        </h1>
        <p className="text-muted-foreground">
          Our APIs are designed to be developer-friendly, secure, and easy to
          implement—ensuring a hassle-free verification process.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {otherProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-accent rounded-xl p-6 transition-all duration-200 shadow-md border-transparent hover:bg-white border hover:border-gray-200"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 `}
              >
                {product.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <a
                href="#"
                className={`text-sm font-medium flex items-center text-gray-500 hover:text-blue-600`}
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurOtherProducts
