import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FontWeight {
  weight: number
  style: string
  url?: string
}

interface FontFamily {
  name: string
  weights: FontWeight[]
  description: string
  externalSource?: string
  externalUrl?: string
}

export function FontCard({ font }: { font: FontFamily }) {
  const weightNames: Record<number, string> = {
    400: "Regular",
    500: "Medium",
    700: "Bold",
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gray-50">
        <div className="flex justify-between items-center">
          <CardTitle>{font.name}</CardTitle>
          {font.externalSource && (
            <Badge variant="outline" className="ml-2">
              {font.externalSource}
            </Badge>
          )}
        </div>
        <CardDescription>{font.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {font.weights.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500">Available Weights & Styles</h3>
            <div className="grid gap-3">
              {font.weights.map((weight, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                      {weight.weight.toString().charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">
                        {weightNames[weight.weight] || weight.weight}
                        {weight.style === "italic" ? " Italic" : ""}
                      </p>
                      <p className="text-xs text-gray-500">Weight: {weight.weight}</p>
                    </div>
                  </div>
                  {weight.url && (
                    <a
                      href={weight.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      View Font File
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-500">
              This font is loaded from an external source.
              {font.externalUrl && (
                <>
                  <br />
                  <a
                    href={font.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View External Stylesheet
                  </a>
                </>
              )}
            </p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Preview</h3>
          <div
            className="p-4 border rounded-md"
            style={{ fontFamily: font.name === "CeraPRO" ? "CeraPRO, sans-serif" : `"${font.name}", serif` }}
          >
            <p className="text-2xl mb-2">The quick brown fox jumps over the lazy dog.</p>
            <p className="text-base">
              Blinkist offers the key insights from top nonfiction in a made-for-mobile format.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
