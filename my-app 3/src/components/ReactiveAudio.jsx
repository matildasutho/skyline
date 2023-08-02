export default function AudioAnalyzer {
    #ctx: AudioContext;
    #analyserNode: AnalyserNode;
    #sourceNode: MediaElementAudioSourceNode;


constructor(audioElement: HTMLAudioElement) {
    this.#ctx = new AudioContext();
    this.#analyserNode = this.#ctx.createAnalyser();
    this.#sourceNode = this.#ctx.createMediaElementSource(audioElement);

    this.#analyserNode.minDecibels = -60;
    this.#analyserNode.smoothingTimeConstant = 0.8;

    this.#sourceNode.connect(this.#analyserNode);
    this.#sourceNode.connect(this.#ctx.destination);
}
getFFT(): Uint8Array {
    const data = new Uint8Array(this.#analyserNode.freuqencyBinCount);
    this.#analyserNode.getByteFrequencyData(data);
    return data;
}
}