"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, Filter, ArrowUpRight, CheckCircle2, XCircle, CreditCard, Wallet, Activity, Loader2 } from "lucide-react";

interface Transaction {
  id: string;
  username: string;
  email: string;
  amountMoney: number;
  amountXu: number;
  paymentMethod: string;
  paymentRef: string | null;
  status: "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";
  createdAt: string;
}

interface Summary {
  todayRevenue: number;
  todaySuccess: number;
  monthCoins: number;
}

const STATUS_LABEL: Record<string, string> = {
  COMPLETED: "Thành công",
  FAILED: "Thất bại",
  PENDING: "Đang xử lý",
  CANCELLED: "Đã huỷ",
};

const STATUS_STYLE: Record<string, string> = {
  COMPLETED: "bg-emerald-500/10 text-emerald-500",
  FAILED: "bg-red-500/10 text-red-500",
  PENDING: "bg-yellow-500/10 text-yellow-400",
  CANCELLED: "bg-neutral-500/10 text-neutral-400",
};

function formatMoney(amount: number) {
  return amount.toLocaleString("vi-VN") + " VNĐ";
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminTransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<Summary>({ todayRevenue: 0, todaySuccess: 0, monthCoins: 0 });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [method, setMethod] = useState("all");
  const [status, setStatus] = useState("all");

  const limit = 20;
  const totalPages = Math.ceil(total / limit);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search,
        method,
        status,
        page: String(page),
        limit: String(limit),
      });
      const res = await fetch(`/api/admin/transactions?${params}`);
      const data = await res.json();
      setTransactions(data.transactions ?? []);
      setTotal(data.total ?? 0);
      setSummary(data.summary ?? { todayRevenue: 0, todaySuccess: 0, monthCoins: 0 });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [search, method, status, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [search, method, status]);

  const handleSearch = () => {
    setSearch(searchInput);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Lịch sử Nạp Coin</h1>
        <p className="text-neutral-400 mt-1">Lịch sử giao dịch nạp Coin từ cổng thanh toán tự động.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-neutral-400 text-sm font-medium">Doanh thu hôm nay</p>
              <h3 className="text-2xl font-bold text-white mt-2">
                {formatMoney(summary.todayRevenue)}
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-neutral-400 text-sm font-medium">Giao dịch thành công hôm nay</p>
              <h3 className="text-2xl font-bold text-yellow-400 mt-2">
                {summary.todaySuccess.toLocaleString("vi-VN")}{" "}
                <span className="text-sm text-neutral-500 font-normal">Giao dịch</span>
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-neutral-400 text-sm font-medium">Tổng Coin đã nạp (Tháng)</p>
              <h3 className="text-2xl font-bold text-white mt-2">
                {summary.monthCoins.toLocaleString("vi-VN")}{" "}
                <span className="text-sm text-neutral-500 font-normal">Coin</span>
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Mã giao dịch, tên người dùng, email..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full bg-[#111] border border-neutral-800 text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
          />
        </div>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400 appearance-none min-w-[150px]"
        >
          <option value="all">Tất cả cổng thanh toán</option>
          <option value="bank">Chuyển khoản</option>
          <option value="momo">Momo</option>
          <option value="zalopay">ZaloPay</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400 appearance-none min-w-[150px]"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="completed">Thành công</option>
          <option value="failed">Thất bại</option>
          <option value="pending">Đang xử lý</option>
          <option value="cancelled">Đã huỷ</option>
        </select>
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-[#111] border border-neutral-800 text-white px-4 py-2.5 rounded-xl hover:bg-neutral-900 transition-colors"
        >
          <Filter className="w-5 h-5" />
          Lọc
        </button>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900/50">
                <th className="p-4 text-neutral-400 font-medium text-sm">Mã GD</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Người dùng</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Số tiền nạp</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Nhận (Coin)</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Cổng thanh toán</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Thời gian</th>
                <th className="p-4 text-neutral-400 font-medium text-sm">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-10 text-center text-neutral-500">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-10 text-center text-neutral-500">
                    Không có giao dịch nào.
                  </td>
                </tr>
              ) : (
                transactions.map((trx) => (
                  <tr key={trx.id} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="p-4 font-mono text-xs text-neutral-300 max-w-[120px] truncate" title={trx.id}>
                      {trx.id.slice(0, 12)}...
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-white">{trx.username}</div>
                      <div className="text-xs text-neutral-500">{trx.email}</div>
                    </td>
                    <td className="p-4 font-medium text-white">{formatMoney(trx.amountMoney)}</td>
                    <td className="p-4 font-bold text-yellow-400">+{trx.amountXu.toLocaleString("vi-VN")}</td>
                    <td className="p-4">
                      <span className="flex items-center gap-1.5 text-sm text-neutral-300">
                        <CreditCard className="w-4 h-4 text-neutral-500" />
                        {trx.paymentMethod}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-neutral-400">{formatDate(trx.createdAt)}</td>
                    <td className="p-4">
                      <span
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-max ${STATUS_STYLE[trx.status] ?? "bg-neutral-500/10 text-neutral-400"}`}
                      >
                        {trx.status === "COMPLETED" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        {STATUS_LABEL[trx.status] ?? trx.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-neutral-800 flex justify-between items-center text-sm text-neutral-400">
          <div>
            Hiển thị {total === 0 ? 0 : (page - 1) * limit + 1} -{" "}
            {Math.min(page * limit, total)} trong số {total.toLocaleString("vi-VN")} giao dịch
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              Trước
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(page - 2, totalPages - 4)) + i;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`px-3 py-1.5 rounded-lg border border-neutral-800 transition-colors ${
                    pageNum === page ? "bg-neutral-800 text-white" : "hover:bg-neutral-800"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              Tiếp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
