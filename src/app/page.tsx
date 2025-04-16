"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  const tipAmount = (billAmount * (tipPercentage / 100));
  const totalBillAmount = billAmount + tipAmount;
  const individualShare = totalBillAmount / numberOfPeople;

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-md rounded-lg">
        <CardHeader className="space-y-1 p-6 pb-0">
          <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">TipSplitter</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Calculate your tip and split the bill!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="billAmount">Bill Amount</Label>
              <Input
                type="number"
                id="billAmount"
                placeholder="Enter bill amount"
                className="bg-input border-input text-foreground"
                onChange={(e) => setBillAmount(parseFloat(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipPercentage">Tip Percentage ({tipPercentage}%)</Label>
              <Slider
                id="tipPercentage"
                defaultValue={[tipPercentage]}
                max={30}
                min={0}
                step={1}
                className="bg-secondary"
                onValueChange={(value) => setTipPercentage(value[0])}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numberOfPeople">Number of People</Label>
              <Input
                type="number"
                id="numberOfPeople"
                placeholder="Enter number of people"
                className="bg-input border-input text-foreground"
                onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Results</h2>
              <div className="grid gap-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Tip Amount:</span>
                  <span>${tipAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Total Bill:</span>
                  <span>${totalBillAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Amount per Person:</span>
                  <span>${individualShare.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
